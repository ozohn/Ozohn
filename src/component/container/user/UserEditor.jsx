import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import getBase64 from '../../../util/getBase64';
import InputForm from '../../presenter/forms/Input';
import LinkButton from '../../presenter/buttons/LinkBtn';
import { MainContext } from '../../../context/mainContext';

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: inline-block;
  padding: 4rem 4rem 4rem;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const Fields = styled.div`
  margin-bottom: 7rem;
`;

const TextArea = styled.textarea`
  display: block;
  margin-top: 3rem;
  height: 25rem;
  width: 50rem;
  border: 0;
  border: 0.2rem solid #231f20;
  font-size: 2rem;
  font-weight: bold;
  background: transparent;
  outline: 0;
  vertical-align: top;
  &:focus {
    border: 0.2rem solid #55fe47;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Input = styled.input`
  display: inline-block;
  margin-left: 4rem;
  padding-left: 1rem;
  width: 22rem;
  border: 0;
  border-bottom: 0.2rem solid #231f20;
  outline: 0;
  font-size: 4rem;
  font-weight: bold;
  background: transparent;
  color: #1f272f;
  vertical-align: top;
  &:focus {
    border-bottom: 0.2rem solid #55fe47;
  }
`;
const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
`;
const FileLabel = styled.label`
  padding: 3rem 0 2.4rem;
  position: relative;
  display: inline-block;
  width: 14rem;
  border: 2px solid #231f20;
  background-color: #231f20;
  font-size: 2rem;
  font-weight: bold;
  color: #54ff47;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
`;

function UserSetting() {
  // const { userdesc, username } = location.state.user;
  const { state, modifyUserInfo } = useContext(MainContext);
  const { userdesc, username } = state.user.userInfo;
  // const { modifyUserInfo } = useContext(CreatorContext);
  const [userName, setUserName] = useState(username);
  const [userDesc, setUserDesc] = useState(userdesc);
  const [userImage, setUserImage] = useState();
  return (
    <FormContainer>
      <Fields>
        <InputForm
          Tag={Input}
          cb={setUserName}
          placeholder="Name"
          label="Who are you?"
          type="text"
          value={username}
        />
      </Fields>
      <Fields>
        <InputForm
          Tag={TextArea}
          cb={setUserDesc}
          label="More"
          placeholder="What's up?"
          type="textarea"
          value={userdesc}
        />
      </Fields>
      <FileLabel>
        Image
        <InputFile
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => getBase64(e.target.files[0], setUserImage)}
        />
      </FileLabel>
      <LinkButton
        pathname="/user"
        text="Submit"
        cb={() =>
          modifyUserInfo({
            userdesc: userDesc,
            userimage: userImage,
            username: userName,
          })
        }
      />
    </FormContainer>
  );
}

export default UserSetting;
