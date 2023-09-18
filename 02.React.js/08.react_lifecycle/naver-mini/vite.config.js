import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {  //#1. axios라이브러리 등으로 http 요청인데 api로 시작하면,
        target: 'https://openapi.naver.com',  //#2. 이쪽 주소로 매핑하여 백그라운드로 보내라.
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/v1/, ''),
        secure: false,
        ws: true
      }
    }
  } 
})
