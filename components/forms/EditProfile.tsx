import { useState } from 'react';
import dayjs from 'dayjs';

import { Input, Textarea } from '..';
import CustomButton from '../elements/Button/CustomButton';

import { updateUser, uploadPhoto } from '../../libs/users';
import toast from 'react-hot-toast';

const EditProfile = ({ formData, uid, onHide }: any) => {
  const [state, setState] = useState<{ [key: string]: any }>({ formData });
  const [file, setFile] = useState<any>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    state.formData[e.target.name].value = e.target.value;
    setState({ ...state });
  };

  const onFileInput = (e: any) => {
    const reader = new FileReader();
    let newfile = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (newfile) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(newfile);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      uploadPhoto(newfile).then((resp: any) => {
        if (resp) {
          state.formData.profilePicUrl.value = resp;
          setState({ ...state });
        }
      });

      // if there is no file, set image back to null
    } else {
      setFile(null);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: any = {
      name: state.formData.name.value,
      email: state.formData.email.value,
      nickName: state.formData.nickName.value,
      profilePicUrl: state.formData.profilePicUrl.value,
      twitter: state.formData.twitter.value,
      facebook: state.formData.facebook.value,
      linkedIn: state.formData.linkedIn.value,
      instagram: state.formData.instagram.value,
      youtube: state.formData.youtube.value,
      title: state.formData.title.value,
      aboutMe: state.formData.aboutMe.value,
      websiteUrl: state.formData.websiteUrl.value,
      lastUpdatedAt: dayjs().format('YYYY-MM-DD'),
    };

    updateUser(uid, data).then((resp: any) => {
      if (resp.success) {
        onHide();
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    });
  };

  return (
    <div>
      <Input
        fieldKey="file"
        field={{
          key: 'file',
          label: 'Upload Profile Image',
          type: 'file',
          required: false,
          placeholder: 'Select an Image',
        }}
        onChange={onFileInput}
        accept="image/*"
      />
      {Object.keys(state.formData).map((key: any) => {
        if (
          (state.formData[key].type === 'text' ||
            state.formData[key].type === 'number' ||
            state.formData[key].type === 'date') &&
          !state.formData[key].hide
        ) {
          return (
            <Input
              fieldKey={state.formData[key].key}
              field={state.formData[key]}
              onChange={onChange}
            />
          );
        }
        if (state.formData[key].type === 'textarea') {
          return (
            <Textarea
              fieldKey={state.formData[key].key}
              field={state.formData[key]}
              onChange={onChange}
            />
          );
        }
      })}
      <div className="flex justify-end py-4">
        <CustomButton
          className="px-10"
          size="large"
          style="info"
          label="Submit"
          type="submit"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default EditProfile;
