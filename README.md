# 양승호 201640124

## [11월3일]

오류가났을경우
개인컴퓨터에서는 오류가 없는데 다른컴퓨터에서 오류가 났을때 npm-version으로 확인한다.(버전이 다를경우 오류날때도 있음)</br>
package.json의 경우는 version range를 사용한다. "express": "~4.16.1“ </br>
package-lock.json은 package.json 이 변경될 때 마다 업데이트 되는 것으로 좀더 정확한 버전이
기록되어 있다.

홈에서 영화를 눌렀을때 나오는 링크걸기
```jsp
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </div>
    )
}
```

영화 about 만들기

route props를 사용
consol.log()를 통해 About으로 어떤 props가 넘어오는지 확인한다.
react-router-dom에서 Route 컴포넌트가 그려줄 컴포넌트에 전달한 props를 확인할 수 있다.
Route 컴포넌트가 그려줄 컴포넌트에는 항상 이 props가 전달되며, 이 props는 원하는 데이터를 담 아 보낼 수 있다.

function About(props) {
    console.log(props)
리다이렉트 기능
리다이렉트 기능을 사용하기 위해서는 route props의 history 키를 활용해야 한다.
history키에는 push, go, goBack, goForward와 같은 키가 있으며, 그 키에는 URL을 변경해 주는 함수들이 있다.

push() 함수 사용하기
``jsp
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } =this.props
        if ( location.state === undefined ) {
            history.push('/')
        }
    }
```
영화 제목 출력하기
```jsp
    render () {
        const { location } = this.props
        return (
        <span>{location.state.title}</span>
        )
    }
}
```

***
## [ 10월 27일]
npm insall react-router-dom 으로 
routers폴더 생성한 후 Home.js,Home.css,About.js,About.css생성으로 routers폴더에 사용할걸 편하게 정리했다.<br>
Movie.js에서 key값으로 index를 주고 className으로 'movie-genre'생성
```jsx
{genres.map((genre,index) =>{
    return(
        <li key={index} className='movie-genre'>{genre}</li>
    )
})
```
home 밑에 introducthion으로 접속하면 root부터 스캔하여 /home/introduction이 같이 나온다.
```jsx
    <Route path='/' component={Home}>
        <h1>Home</h1>
    </Route>
    <Route path='/home/introduction'>
        <h1>introduction</h1>
    </Route>      
    <Route path='/about' component={About}>
        <h1>About</h1>
```
/이 들어가면 전부 나오는걸 피하기위해서 exact={true}를 추가하여 수정
```jsx
      <HashRouter>
         <Route path='/' exact={true} component={Home}>
            <h1>Home</h1>
        </Route>
```
about.css를 사용하기 위해서 import './About.css'사용하고 span에서 div로 변경
```jsx
import './About.css'
function About() {
    return(
        <div className='about__container'>
            <h1>Hello About!</h1>
        </div>
    )
} 
```

***
## [ 10월 13일]
1. 객체키와 객체값이 같으면 생략이 가능하다.  
2. 한폴더에 전부 넣지말고 컴포넌트를 잘 나눠두는게 편하다.  
3. App.js의 getMovies가 state에 저장하고 function Movie로 보내고 이상이 없으면 return으로 html로 디자인을 하고 return이 앱으로 최종랜더링을 한다.  
4. 아티크는 큰 부류(다른종류 컨텐츠)를 나눌때 사용하고 section은 같은부류(같은종류의 분류)를 나누기 위해서 사용한다.  
5. 단어마다 첫글자를 대문자로 쓰는것이 카멜로케이션이다.('loderText') 중간에-을 쓴건 케밥코레이션이다.(loder-text) 파스칼은 첫자, 중간전부 대문자를 쓴다.(LoderText)  
6. css스타일로 연결하면 바로 적용이 가능하다.

***
## [ 10월 6일]
1. setTime 함수는 (변수함수 , 초)가 들어간다.</br>
2. await,async는 시간이 필요하다는 뜻이다.

***
## [ 09월 29일 ]
1. 깃허브는 마스터를 메인,브랜치로 바꿀 수 있다. </br>
2. 노드는 크기는 작지만 클라우드로 올리기에는 크다.=관리하기 어렵다 remove dir로 삭제할 수 있다.</br>
3. 절대경로 대신 상대경로를 쓰는법 public에 디렉토리 하나를 만들어서 이미지들을 넣는다. 예제- images/이미지이름.jpg (리액트 프로그램에서는 소스폴더와 퍼플릭은 같은위치로 생각)</br>
4. string은 반드시 보내야한다 내용도 string. number는 반드시 보낼필요가 없다. 만약 보낸다면 number타입 이여야 한다.</br>
5. prop-types의 다양한 사용방법은 http://github.com/facebook/prop-types 참고. </br>
6. import {Component} from에서 더 react에서 가져올 것이 있으면 {Component,가져올것}으로 사용하면 된다.</br>
7. react에서 리턴은 무조건 하나의 태그(<div></div>)로 뭉쳐야한다. </br>
8. 이벤트를 만들고 onClick함수를 넣어서 호출하면 바뀐다.</br>
9. component를 넣으면 이벤트가 발동할때마다 활동을 알 수 있다.
***

## [ 09월 15일 ]
프롭스에 있는 데이터는 문자외 숫자는 중괄호를 써야한다 </br>
메인컴포넌트에서 전달하고자 하는 컴포넌트를 불러서 내부에 옵션으로 저장할수있다.</br>
구조분해 할당으로 const {변수이름}으로 줄일 수 있다.</br>
jss태그는 하나로 감싸야한다.</br>
Ctrl+F5를 누르면 캐시를 교체하고 로딩한다.</br>
함수는 소문자로 시작한다.</br>
함수를 화살표 함수로 저장할 수 있고 더 간단하게 수정 할 수도 있다.</br>Key값을 넣어주면 한번들어온 값인지 아닌지 편하게 알 수 있다.

***
## [ 09월 08일 ]
학습내용 
제일 마지막에 있는 쉼표는 없어도 된다. (개발자들 중에는 버릇처럼 찍는 사람도 있다),<br/>
커밋의 첫줄엔 50자 이상 저장하면 waring메세지가 나온다.(2줄부턴 상관없다.), <br/>
리액트 앱 시작은 npm start로 시작 컨트롤+C로 종료 <br/>
App.js, index.js 등 파일을 리액트가 받아서 해석한 결과물을 index.html로 나온다. <br/>
리액트 실행 중 파일 수정 후 저장하면 새로고침 없이 바로 적용된다 <br/>
파일하나 할때마다 커밋을 잘해두자 오늘처럼 한번에 하지 말고ㅠ