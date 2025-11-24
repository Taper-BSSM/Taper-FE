import { useRouter } from 'expo-router';
import { View, Pressable } from 'react-native';
import { BackIcon, CheckBoxIcon } from '../../src/assets/icons';
import * as Styled from "../../src/styles/common";
import * as AuthStyled from "../../src/styles/auth";

const Login = () => {
  const router = useRouter();

  return (
    <AuthStyled.Login>
      <Styled.Header>
        <Pressable onPress={() => router.back()}>
          <BackIcon size={24} />
        </Pressable>
      </Styled.Header>
      <AuthStyled.Body>
        <AuthStyled.Main>
          <Styled.Title> 로그인 </Styled.Title>
          <AuthStyled.FormContainer>
            <AuthStyled.Form>
              <AuthStyled.FormWrapper>
                <AuthStyled.InputContainer>
                  <Styled.Input placeholder='아이디' />
                  <Styled.Input placeholder='비밀번호' />
                </AuthStyled.InputContainer>
                <AuthStyled.CheckBoxContainer>
                  <CheckBoxIcon size={20} />
                  <Styled.Text> 자동 로그인 </Styled.Text>
                </AuthStyled.CheckBoxContainer>
              </AuthStyled.FormWrapper>
              <Styled.Button> 로그인 </Styled.Button>
            </AuthStyled.Form>
            <AuthStyled.LinkContainer>
              <AuthStyled.Link> 아이디 찾기 </AuthStyled.Link>
              <AuthStyled.Link> 비밀번호 찾기 </AuthStyled.Link>
              <AuthStyled.Link> 회원가입 </AuthStyled.Link>
            </AuthStyled.LinkContainer>
          </AuthStyled.FormContainer>
        </AuthStyled.Main>
      </AuthStyled.Body>
    </AuthStyled.Login>
  )
}

export default Login;