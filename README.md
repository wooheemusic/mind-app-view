## 소개
- 이 저장소는 앱의 **일부만을 공개**하였습니다. `npm start`를 하여도 작동하지 않습니다.
- react는 고전적인 서버사이드 MVC 앱과는 다르게, view tree의 뼈대 위에 model과 controller가 얹혀진 형태입니다. react hook은 view와 강결합된 logic을 훌륭하게 분리할 수 있는 수단을 제공합니다. 이 테스트 앱에서는 input node와 같은 local view state를 제외하고는 모두 useCustom으로 모듈화 하여 분리하였습니다. 분리된 logic은 볼 수 없지만, 분리된 view를 통해 logic의 모듈성을 평가할 수 있습니다.

## 기술적 특이사항
- log-in과 관련하여 브라우져의 여러탭들이 동기화됩니다.
- 전역 키보드 이벤트로 앱을 다루는 시도를 해보았습니다.
- react hook의 useEffect를 다방면으로 사용하려 했습니다.
- css-in-js 중 jss를 시도해보았습니다.
- 실험적이고 처음 사용하는 것들이 많아 코드 정리가 더 필요합니다.
  
## 앱 이용 방법
- [demo](https://mind-app-snapshot.surge.sh/)에 접속합니다.
- 임의의 이메일을 입력합니다.
- 임의의 비밀번호를 입력합니다.
- 가입한 적이 없어도 validation을 만족하면 로그인이 됩니다.
- 키보드의 화살표로 애니메이션을 테스트합니다.
