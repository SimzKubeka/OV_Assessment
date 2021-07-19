import React from 'react';
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
  Form,
  Input,
} from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';

const ADD_NEW_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

function HomePage({ history }) {
  let input;
  const [createUser] = useMutation(ADD_NEW_USER);

  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='./assets/logo.png'
            style={{ marginBottom: 15 }}
          />
          Sims-Shop 🚀
        </Header>
        <Form
          vertical
          onSubmit={(e) => {
            e.preventDefault();
            createUser({ variables: { name: input.value } });
            input.value = '';
          }}
        >
          <div style={{ marginBottom: 5 }}>
            <Input
              placeholder='Enter Name'
              inverted
              ref={(node) => {
                input = node;
              }}
            />
          </div>
          <div>
            <Button
              animated
              as='button'
              onClick={() => history.push('/clientside')}
              size='large'
              inverted
              type='submit'
              color='black'
            >
              <Button.Content visible>Start Shopping</Button.Content>
              <Button.Content hidden>
                <Icon inverted name='arrow right' />
              </Button.Content>
            </Button>
          </div>
        </Form>
      </Container>
    </Segment>
  );
}

export default HomePage;
