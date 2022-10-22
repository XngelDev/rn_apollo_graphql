import { StyleSheet } from 'react-native'
import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'

import MainView from '../views/MainView'

const MainRouter = () => {
    return (
        <NativeRouter>
            <Routes >
                <Route path="/" element={<MainView/>} />
            </Routes>
        </NativeRouter>
    )
}

export default MainRouter

const styles = StyleSheet.create({})