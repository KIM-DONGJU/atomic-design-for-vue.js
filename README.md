## atomic-design-template
누구나 vue.js 기반 atomic desigin을 적용하기 쉽도록 template 작성

## Atomic Design 이란?
##### 디자인 요소들을 나누어 파악하고 이 요소들이 조합되는 과정을 통해서 디자인을 구성하는 컴포넌트 중심의 디자인 패턴

  * <h6>Atoms: 가장 작은 component 요소로, input, button 등의 tag들이 포함될 수 있다. <br>
    편리하게 재사용하기 위해 특정 값을 종속시키지 않고 props로 값을 전달받아 사용할 수 있도록 설계하는 것이 바람직하다.</h6>
    
    ![atom](https://user-images.githubusercontent.com/58763448/116199148-c1d46f80-a771-11eb-8ca6-90388c269db0.jpeg)
  * <h6>Molecules: Atom을 여러개 조합한 component로, label + input과 같은 형태의 email 입력 폼과 같은 형태로 사용이 가능해진다.</h6>
  
    ![molecule](https://user-images.githubusercontent.com/58763448/116199167-c731ba00-a771-11eb-8035-0ee808d568a0.jpeg)
  * <h6>Organisms: Atom과 Molecule을 조합한 component로, 여러개의 form을 합쳐 signUp form과 같은 형태로 사용할 수 있다.<br>
    다수의 component들을 합쳐 특정 목적을 가지고 만든 component이기 때문에 재사용성은 다소 떨어지게 된다.</h6>
    
    ![organism](https://user-images.githubusercontent.com/58763448/116199191-cbf66e00-a771-11eb-80a1-f4e535300dfb.jpeg)
  * <h6>templates: component들만 넣으면 바로 사용할 수 있도록 layout만 구성해놓은 component로, 같은 layout, 다른 구성의 page가 없을 경우에는 따로 작성하지 않는 경우가 많다. </h6>

   ![template](https://user-images.githubusercontent.com/58763448/116199229-d9abf380-a771-11eb-9867-07a026bcbcd4.jpg)
  * <h6> pages: 사용자에게 보여질 화면을 구성한 component로, 전체적인 로직이나 상태관리 등을 pages에서 관리하게 된다.</h6>

   ![page](https://user-images.githubusercontent.com/58763448/116199217-d57fd600-a771-11eb-8f12-427f5452de3f.jpg)


## Atomic Design의 장점
