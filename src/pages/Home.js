import { React, useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/search";
import Picture from "../components/picture";

const Home = () => {
  const [input, setInput] = useState(""); //即時input
  const [currentSearch, setCurrentsearch] = useState(""); //input&搜尋
  const [page, setPage] = useState(1); //頁數
  const [data, setData] = useState([]); //圖片資料
  const auth = "Chz1sHtPgkWs61hLhYtlTJ4edLSTqCZXayQhsoBnHPAq3RzlZ7wEOacF";

  //檢查關鍵字設定fetchURL
  function newURL() {
    let URL;
    if (currentSearch) {
      URL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    } else {
      URL = `https://api.pexels.com/v1/curated?page=${page}`;
    }
    console.log(URL);
    return URL;
  }

  //搜尋觸發
  const buttonTrigger = () => {
    if (input !== currentSearch) {
      //改變搜尋 重整頁數與更新關鍵字
      setCurrentsearch(input);
      setPage(1);
    } else {
      //持續搜尋 頁數更新下一頁
      setPage((page) => page + 1);
    }
  };

  //初始化、搜尋或頁數不同時fetch網址並儲存data
  useEffect(() => {
    const fetchPhotos = async () => {
      let result = await axios.get(newURL(), {
        headers: { Authorization: auth },
      });
      setData(result.data.photos);
    };
    fetchPhotos();
  }, [currentSearch, page]);

  return (
    <div style={{ minHeight: "80vh" }}>
      <h1>home</h1>
      <Search search={buttonTrigger} setInput={setInput} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Home;
