import { configureStore } from '@reduxjs/toolkit'
import slicer from './slice' 

export default configureStore({
  reducer: {
    slice:slicer,
  },
})