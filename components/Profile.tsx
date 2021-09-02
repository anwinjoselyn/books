import Image from 'next/Image';

import useRequireAuth from '../hooks/useRequireAuth';

import { CustomButton } from '.';

import img from '../public/images/profile-placeholder.png';
import tw from '../public/images/Twitter-Logo.svg';
import fb from '../public/images/Facebook_icon.svg';
import li from '../public/images/Linkedin_icon.svg';
import ig from '../public/images/Instagram_logo_2016.svg';
import yt from '../public/images/YouTube_icon.svg';

const Profile = ({ user, onEdit }) => {
  const auth = useRequireAuth();

  return (
    <div className="grid grid-cols-6 gap-4 bg-white rounded-lg p-6 justify-center">
      <div className="col-span-3 flex justify-center">
        <Image
          src={auth.user?.profilePicUrl || img}
          width={200}
          height={200}
          alt="profile"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-6 gap-4 justify-center">
          <span className="material-icons col-start-1 text-md">
            person_outline
          </span>
          <div className="col-start-2 col-span-5">
            <h2 className="text-lg">
              {auth.user.name}{' '}
              {auth.user.nickName && 'a.k.a. ' + auth.user.nickName}
            </h2>
          </div>
          <span className="material-icons col-start-1">title</span>
          <div className="col-start-2 col-span-5">
            <h2 className="text-lg">{auth.user.title || '---'}</h2>
          </div>
          <span className="material-icons col-start-1">mail_outline</span>
          <div className="col-start-2 col-span-5">
            <h2 className="text-lg">{auth.user.email}</h2>
          </div>
          <span className="material-icons col-start-1">link</span>
          <div className="col-start-2 col-span-5">
            <h2 className="text-lg">{auth.user.websiteUrl || '---'}</h2>
          </div>
          <div className="col-span-6 flex align-center">
            <a href={auth.user.twitter} className="mx-2">
              <Image
                src={tw}
                width={24}
                height={24}
                alt="profile"
                className="rounded-lg mx-2"
              />{' '}
            </a>
            {auth.user.linkedIn && (
              <a href={auth.user.linkedIn} className="mx-2">
                <Image
                  src={li}
                  width={24}
                  height={24}
                  alt="profile"
                  className="rounded-lg mx-2"
                />{' '}
              </a>
            )}
            {auth.user.facebook && (
              <a href={auth.user.facebook} className="mx-2">
                <Image
                  src={fb}
                  width={24}
                  height={24}
                  alt="profile"
                  className="rounded-lg mx-2"
                />{' '}
              </a>
            )}
            {auth.user.instagram && (
              <a href={auth.user.instagram} className="mx-2">
                <Image
                  src={ig}
                  width={24}
                  height={24}
                  alt="profile"
                  className="rounded-lg mx-2"
                />{' '}
              </a>
            )}
            {auth.user.youtube && (
              <a href={auth.user.youtube} className="mx-2">
                <Image
                  src={yt}
                  width={24}
                  height={24}
                  alt="profile"
                  className="rounded-lg"
                />{' '}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-6 flex justify-center">
        {auth.user.aboutMe || 'Something about yourself'}
      </div>
      <CustomButton
        style="outline-info"
        size="large"
        label="Edit"
        onClick={onEdit}
      />
    </div>
  );
};

export default Profile;
