import React from 'react';
import { useParams } from 'react-router-dom';
import { timeStampDisplay } from '../../service/dateService';
import ProfilePicUi from '../ui/ProfilePicUi';

function CommentOwner({ firstName, lastName, timeCreate, profile, message, userIdComment }) {
  const { id } = useParams();

  return (
    <div
      className={`${
        userIdComment === +id ? 'lg:mx-8 mx-6 lg:w-3/4 mt-4 mb-8 lg:self-end' : 'lg:mx-8 mx-6 lg:w-3/4 mt-4 mb-8'
      }`}
    >
      <div className={`${userIdComment === +id ? 'flex items-center' : 'pl-16 flex justify-end items-center'}`}>
        <p className="mr-2 text-lg">
          {firstName} {lastName}
        </p>
        <p className="text-sm text-gray-500">{timeStampDisplay(timeCreate)}</p>
      </div>
      <div className="bg-white relative py-6 px-14 shadow-container rounded-3xl ">
        <div class={`${userIdComment === +id ? 'absolute -right-8 -top-8 w-20 h-20' : 'absolute -left-8 -top-8'}`}>
          <ProfilePicUi beforeSize="20" afterSize="20" url={profile} />
        </div>

        <div className="comment-container break-words">
          <div>
            <p>{message}</p>
            <img src="../../images/mockPicPost.png" alt="" />
          </div>
          {/* end owner comment */}
        </div>
      </div>
    </div>
  );
}

export default CommentOwner;
