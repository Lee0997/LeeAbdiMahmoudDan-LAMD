import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const RegistrationForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Registration
      </Header>
      <Form size='large'>
        <Segment stacked>
          <label>Please enter an email address below:</label>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <label>Password:</label>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default RegistrationForm