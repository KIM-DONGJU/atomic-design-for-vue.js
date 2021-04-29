## atomic-design-template
누구나 vue.js 기반 atomic desigin을 적용하기 쉽도록 template 작성
<br><br>

## Atomic Design 이란?
#### 디자인 요소들을 나누어 파악하고 이 요소들이 조합되는 과정을 통해서 디자인을 구성하는 컴포넌트 중심의 디자인 패턴

  * <h5>Atoms: 가장 작은 컴포넌트 요소로, input, button 등의 tag들이 포함될 수 있다. <br>
    편리하게 재사용하기 위해 특정 값을 종속시키지 않고 props로 값을 전달받아 사용할 수 있도록 설계하는 것이 바람직하다.</h5>
  * <h5>Molecules: Atom을 여러개 조합한 컴포넌트, label + input과 같은 형태의 email 입력 폼과 같은 형태로 사용이 가능해진다.</h5>
  * <h5>Organisms: Atom과 Molecule을 조합한 컴포넌트, 여러개의 form을 합쳐 signUp form과 같은 형태로 사용할 수 있다.<br>
    다수의 컴포넌트 합쳐 특정 목적을 가지고 만든 컴포넌트 때문에 재사용성은 다소 떨어지게 된다.</h5>
  * <h5>templates: 컴포넌트 넣으면 바로 사용할 수 있도록 레이아웃만 구성해놓은 컴포넌트, 같은 레이아웃, 다른 구성의 page가 없을 경우에는 따로 작성하지 않는 경우가 많다. </h5>
  * <h5> pages: 사용자에게 보여질 화면을 구성한 컴포넌트, 전체적인 로직이나 상태관리 등을 pages에서 관리하게 된다.</h5>
<br><br>

## Atomic Design의 장점
* <h5> 컴포넌트들을 혼합하여 일관성있는 디자인을 설계할 수 있다.</h5>
* <h5> 컴포넌트별 style 가이드를 작성하기 쉽다. </h5>
* <h5> 레이아웃을 이해하기 쉬워진다. </h5>

<br><br>

## Atomic Design의 단점
* <h5> atomic design을 고려하지 않은 UI에 적용시키려고 하면 단위나 구성이 애매해질 수 있다.</h5>
* <h5> 내가 생각하는 atomic design의 가장 큰 장점은 재사용성인데, 재사용성이 낮은 디자인에서는 비효율적이다. </h5>
* <h5> 상태관리나 로직 등을 pages나 최소한 organism에서 처리해야하는데, atoms부터 props를 통해 관리하는 것이 생각보다 어렵다. </h5>
* <h5> 디자인에 늦게 참가하는 사람이 있을 경우 전체적인 디자인 및 구성 방식에 대해 설명해줘야 한다. </h5>

<br><br>

## 단점을 극복하기 위해서는
* <h5> 처음부터 atomic design을 고려하여 UI를 설계한다. </h5>
* ~~<h5> 재사용성이 크지 않을 경우 사용하지 않는 것이 오히려 효율적일 수 있다.</h5>~~

<br><br>

## :rocket: 설치 및 실행
### 1. 기본 환경에서의 실행<br>
```git clone https://github.com/KIM-DONGJU/atomic-design-for-vue.js.git```

<strong>Build a vue project</strong>
```cd atomic-design-template
npm install 
npm run serve
```
