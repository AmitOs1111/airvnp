export const SET_LOADING = 'SET_LOADING'
export const SET_DARK_SCREEN = 'SET_DARK_SCREEN'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_TARGET_HERO_REF = 'SET_TARGET_HERO_REF'

export const SET_BOOKS = 'SET_BOOKS'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const ADD_BOOK = 'ADD_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'

const initialState = {
  books: [],
  isLoading: false,
  isDarkScreen: false,
  targetHeroRef: null,
  appFilter: {
    title: '',
    amount: 0,
    categories: '',
  },
}

export function bookReducer(state = initialState, action) {
  let books
  let filterBy
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_DARK_SCREEN:
      return { ...state, isDarkScreen: action.isDarkScreen }
    case SET_FILTER_BY:
      filterBy = { ...state.appFilter, ...action.filter }
      return { ...state, appFilter: filterBy }
    case SET_TARGET_HERO_REF:
      return { ...state, targetHeroRef: action.targetRef }

    case SET_BOOKS:
      return { ...state, books: action.books }
    case REMOVE_BOOK:
      books = state.books.filter((book) => book._id !== action.bookId)
      return { ...state, books: books }
    case ADD_BOOK:
      books = [action.book, ...state.books]
      return { ...state, books }
    case UPDATE_BOOK:
      books = state.books.map((currBook) =>
        currBook._id === action.book._id ? action.book : currBook
      )
      return { books, ...state }

    default:
      return state
  }
}
