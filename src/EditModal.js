import { useRef } from "react";
import { deleteDict, updateDict } from "./redux/modules/dictSlice";
import { useDispatch } from "react-redux";
const EditModal = ({editModalIsOpen, currentDict}) => {
  console.log(currentDict)
  const word_Ref = useRef();
  const explain_Ref = useRef();
  const example_Ref = useRef();
  const dispatch = useDispatch();
  const submit = () => {
    const word = word_Ref.current.value;
    const explain = explain_Ref.current.value;
    const example = example_Ref.current.value;
    const dict = {index: currentDict.index, id: currentDict.id, word: word, explain: explain, example: example};
    dispatch(updateDict(dict));
    editModalIsOpen(false);
  }
  const remove = () => {
    const dict = {index: currentDict.index, id:currentDict.id}
    dispatch(deleteDict(dict));
    editModalIsOpen(false);
  }
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                단어 수정하기
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto w-[500px]">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  단어
                </label>
                <div className="mb-3 pt-0">
                  <input ref={word_Ref} defaultValue={currentDict.word} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  설명
                </label>
                <div className="mb-3 pt-0">
                  <input ref={explain_Ref} defaultValue={currentDict.explain} placeholder="설명을 입력하세요" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full" />
                </div>
              </div><div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  예시
                </label>
                <div className="mb-3 pt-0">
                  <input ref={example_Ref} defaultValue={currentDict.example} type="text" placeholder="예시를 들어주세요" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full" />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => editModalIsOpen(false)}
              >
                닫기
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => remove()}
              >
                삭제하기
              </button>
              <button
                className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => submit()}
              >
                수정하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
export default EditModal;