import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Route } from 'react-router-native'

const PrivateRoute = ({ component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute

const styles = StyleSheet.create({})