/**
 * 설정 객체입니다.
 * @typedef {Object} Config
 * @property {string} url - API의 URL입니다.
 * @property {number} timeout - 요청 타임아웃 값입니다.
 */


/** @type {Config} */
const config = {
  url: 'http://example.com/api',
  timeout: 3000
};

/**
 * 메인 애플리케이션 설정입니다.
 * @type {{config: Config}}
 */
const appConfig = {
  config // 이곳에 JSDoc 주석을 직접 달아서 설명을 추가할 수 있습니다.
};

function add(first, second){
  let addNumber = first + second;

  function next (third){
    return addNumber + third;
  }
  return next;
}

module.exports = appConfig;
