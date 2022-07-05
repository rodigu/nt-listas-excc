import styled from "styled-components";

const ExerciseDetailsContainer = styled.div`
  padding-top: ${({theme}) => theme.space[2]};
  padding-left: ${({theme}) => theme.space[4]};
  padding-right: ${({theme}) => theme.space[2]};

  & div {
    height: 100%;
  }
`

const mdContentClassName = "md-content"

const ExerciseText = styled.div`
    font-size: ${({theme}) => theme.fontSize.large};
`

interface ExerciseDetailsProps {
  breadcrumb: string,
  content: string,
  title: string
}

export const ExerciseDetails = ({breadcrumb, content, title}: ExerciseDetailsProps) => (
  <ExerciseDetailsContainer>
    <h4>{breadcrumb}</h4>
    <h3>{title}</h3>

    <ExerciseText dangerouslySetInnerHTML={{ __html: content }} className={mdContentClassName} />
  </ExerciseDetailsContainer>  
)