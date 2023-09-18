function AppSample() {
  const name = prompt('이름을 입력하세요')
  let today = new Date()
  // console.log(today)
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let date = today.getDate()

  // 계절을 판단하는 로직
  let season = ''
  if (month >= 6 || month <= 8) {
    season = '여름'
  } else if (month >= 9 || month <= 11) {
    season = '가을'
  } else if (month >= 12 || month <= 2) {
    season = '겨울'
  } else {
    season = '봄'
  }

  return (
    <div>
      <div className="current-date" style={{}}>
        <h1>
          <a
            href="#"
            style={{
              padding: '15px',
              backgroundColor: 'rgb(86, 154, 183)',
              color: 'white',
              borderRadius: '9999px',
              width: 'auto',
              textDecoration: 'inherit',
              fontWeight: '700',
              fontSize: '17px',
            }}
          >
            {year}. {month}. {date}
          </a>
        </h1>
      </div>
      <hr></hr>
      <h2>
        {name}님 지금은 {season}입니다. 좋은하루 보내세요!
      </h2>
    </div>
  )
}

export default AppSample
