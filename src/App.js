import { useEffect } from "react";
import { getAllDict } from "./redux/modules/dictSlice";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer"
import { useState } from "react";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";

const App = () => {
  const dispatch = useDispatch();
  const [createModal, createModalIsOpen] = useState(false);
  const [editModal, editModalIsOpen] = useState(false);
  const [currentDict, setCurrentDict] = useState();
  const [page, setPage] = useState(1);
  const dict_list = useSelector(state => state.dict.list);
  const openEditModal = (item) => {
    setCurrentDict(item);
    editModalIsOpen(true);
  }

  // infinite scroll
  const [pageRef, inView] = useInView()
  useEffect(() => {
    if (inView) {
      setPage(page + 1)
      dispatch(getAllDict(page));
    }
  }, [inView]);

  // 제일 처음 데이터 가져오기
  useEffect(() => {
    dispatch(getAllDict(page));
  }, [])
  return (
    <div className="flex flex-col h-[1000px] justify-center items-center ">
      <div className="flex flex-col jusifiy-center max-w-[800px] max-h-[600px] overflow-auto p-[30px] scrollbar-hide border-4 border-indigo-500/100 rounded">
        <div className="text-[30px] font-bold ">Duck90s' Dictionary</div>
        <hr className="my-[5px]" />
        {dict_list.map((item, index) => {
          return (
            <div key={index}
              onClick={() => { openEditModal({ index: index, ...item }) }}
              className="border-blue-200 border-[3px] w-[700px] my-[5px] px-4 py-3 cursor-pointer">
              {dict_list.length - 1 === index ? (
                <div ref={pageRef}>
                  <div className="break-all my-[5px]">
                    <div className="text-[24px] font-bold underline text-slate-400">단어</div>
                    <div className="text-[18px] font-semibold">{item.word}</div>
                  </div>
                  <div className="break-all my-[5px]">
                    <div className="text-[24px] font-bold underline text-slate-400">설명</div>
                    <div className="text-[18px] font-semibold">{item.explain}</div>
                  </div><div className="break-all my-[5px]">
                    <div className="text-[24px] font-bold underline text-slate-400">예시</div>
                    <div className="text-blue-700 text-[18px] font-bold">{item.example}</div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="break-all my-[5px]">
                    <div className="text-[24px] font-bold underline text-slate-400">단어</div>
                    <div className="text-[18px] font-semibold">{item.word}</div>
                  </div>
                  <div className="break-all my-[5px]">
                    <div className="text-[24px] font-bold underline text-slate-400">설명</div>
                    <div className="text-[18px] font-semibold">{item.explain}</div>
                  </div><div className="break-all my-[5px]">
                    <div className="text-[24px] font-bold underline text-slate-400">예시</div>
                    <div className="text-blue-700 text-[18px] font-bold">{item.example}</div>
                  </div>
                </div>
              )}
            </div>

          );
        })}
      </div>
      <>
        <button
          className="bg-pink-500 text-white text-[25px] font-bold px-6 py-3 rounded my-[5px]"
          type="button"
          onClick={() => createModalIsOpen(true)}
        >
          단어 추가하기
        </button>
        {createModal ? (
          <CreateModal createModalIsOpen={createModalIsOpen} />
        ) : null}
        {editModal ? (
          <EditModal editModalIsOpen={editModalIsOpen} currentDict={currentDict} />
        ) : null}
      </>

    </div>
  );
}

export default App;