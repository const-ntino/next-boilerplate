import LogoSVG from 'assets/svg/LogoSVG'
import * as S from './styles'

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'Um boilerplate feito por João Pedro Constantino'
}) => (
  <S.Wrapper>
    <S.Logo>
      <LogoSVG />
    </S.Logo>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
