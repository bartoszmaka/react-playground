import { get } from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import React, { Component } from 'react';

import { GET_USERS, USER_CREATED_SUBSCRIPTION } from './gql';

const UsersListWebSocket = () => {
  const { subscribeToMore, ...useQueryResult } = useQuery(GET_USERS)
  const subscribeToMoreUsers = () => subscribeToMore({
    document: USER_CREATED_SUBSCRIPTION,
    updateQuery: (prev, { subscriptionData }) => {
      const userData = get(subscriptionData, 'data.userCreated')
      if (!userData) { return prev }

      return {
        ...prev,
        users: [
          ...prev.users,
          userData
        ]
      }
    }
  })

  return (
    <Users
      {...useQueryResult}
      subscribeToMoreUsers={subscribeToMoreUsers}
    />

  )
};

class Users extends Component {
  componentDidMount() {
    this.props.subscribeToMoreUsers()
  }

  render() {
    const { data, loading } = this.props

    if (loading) {
      return 'Loading...'
    }

    return (
      <div>
        {data.users.map((item) => <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>)}
      </div>
    )
  }
}

export default UsersListWebSocket
