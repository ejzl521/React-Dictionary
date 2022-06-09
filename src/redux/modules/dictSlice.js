import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

// slice 생성하기
const dict_db = firestore.collection('dict');
export const getAllDict = createAsyncThunk(
  'dict/LOAD',
  async (page) => {

    let doc_data = []

    await dict_db.limit((page) * 7).get().then((docs) => {
      // 반복문으로 docuemnt 하나씩 확인
      docs.forEach((doc) => {
        if (doc.exists) {
          doc_data = [...doc_data, { id: doc.id, ...doc.data() }]
        }
      })
    });

    return doc_data;
  }
)
export const createDict = createAsyncThunk(
  'dict/CREATE',
  async (dict) => {
    let dict_item =
    {
      word: dict.word,
      explain: dict.explain,
      example: dict.example,
    }
    console.log(dict_item)
    await dict_db.add(dict_item).then(docRef => {
      dict_item = { id: docRef.id, ...dict_item };
    })
    return dict_item;
  }
)

export const updateDict = createAsyncThunk(
  'dict/UPDATE',
  async (dict) => {
    let dict_item =
    {
      word: dict.word,
      explain: dict.explain,
      example: dict.example,
    }
    await dict_db.doc(dict.id).update(dict_item)
    return { item: dict_item, index: dict.index };
  }
)

export const deleteDict = createAsyncThunk(
  'dict/DELETE',
  async (dict) => {
    await dict_db.doc(dict.id).delete()
    return dict.index;
  }
)

const dictSlice = createSlice({
  // slice 안에는 initial state, action creator, reducers 등 모든게 한번에 들어간다 
  name: "dict",
  initialState: {
    list:
      [
        {
          word: "apple",
          explain: "빨간 열매",
          example: "맛있당"
        }
      ],
    page: 1,
    count: 1
  },
  reducers: {},
  extraReducers: {
    [getAllDict.fulfilled]: (state, action) => {
      state.list = action.payload;
      //state.page = action.payload.page;
    },
    [createDict.fulfilled]: (state, action) => {
      state.list.push(action.payload);
    },
    [updateDict.fulfilled]: (state, action) => {
      state.list[action.payload.index] = action.payload.item;
    },
    [deleteDict.fulfilled]: (state, action) => {
      state.list.splice(action.payload.index, 1);
    }
  }
})

export default dictSlice.reducer;
