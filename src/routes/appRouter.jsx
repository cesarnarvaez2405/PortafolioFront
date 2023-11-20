import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={'probando'} />
    </Routes>
  )
}
