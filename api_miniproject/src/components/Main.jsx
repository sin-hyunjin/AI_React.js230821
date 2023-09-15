import { useContext } from 'react';
import { NaverData } from '../App';
import Card from 'react-bootstrap/Card';

const Main = () => {
  const data = useContext(NaverData);
  console.log(data);
  return (
    <div>
      {data.searchData.length > 0 ? (
        data.searchData.map(function (item, index) {
          return (
            <Card key={index}>
              <Card.Header>제목 : {item.title}</Card.Header>
              <Card.Body>
                {/* <blockquote className="blockquote mb-0">
                  <p>내용 : {item.description}</p>
                  <footer className="blockquote-footer">
                    시간: {item.pubDate}
                  </footer>
                </blockquote> */}
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Main;
