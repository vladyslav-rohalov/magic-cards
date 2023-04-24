import UserTemplateCard from 'components/userTemplateCard/userTemplateCard';
import {
  ContainerStyled,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  Container9,
} from './userSetCard.styled';

export default function UserSetCard() {
  return (
    <ContainerStyled>
      <Container1>
        <UserTemplateCard />
      </Container1>
      <Container2>
        <UserTemplateCard />
      </Container2>
      <Container3>
        <UserTemplateCard />
      </Container3>
      <Container4>
        <UserTemplateCard />
      </Container4>
      <Container5>
        <UserTemplateCard />
      </Container5>
      <Container6>
        <UserTemplateCard />
      </Container6>
      <Container7>
        <UserTemplateCard />
      </Container7>
      <Container8>
        <UserTemplateCard />
      </Container8>
      <Container9>
        <UserTemplateCard />
      </Container9>
    </ContainerStyled>
  );
}
