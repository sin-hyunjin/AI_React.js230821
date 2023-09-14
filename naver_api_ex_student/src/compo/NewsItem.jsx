import { useContext } from 'react';
import { NaverData } from '../App';
import Card from 'react-bootstrap/Card';

function NewsItem() {
  const data = useContext(NaverData);
  console.log(data);
  return (
    <div>
      {data.searchData.map(function (item, index) {
        return (
          <Card>
            <Card.Header>제목 : {item.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>내용 : {item.description}</p>
                <footer className="blockquote-footer">
                  시간: {item.pubdate}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default NewsItem;
