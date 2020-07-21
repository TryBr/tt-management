import React from 'react';
import './App.css';

import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Sider width={200} className="left-sidebar">
            <a href="/" className="logo">
              <svg width="208" height="48" viewBox="0 0 208 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8839 28.479L26.5262 37.6201C26.9781 37.8694 27.4845 38 27.9991 38C28.5138 38 29.0202 37.8694 29.472 37.6201L44.1149 28.479C44.3574 28.3452 44.5598 28.1478 44.7009 27.9075C44.8419 27.6672 44.9163 27.3929 44.9163 27.1134C44.9163 26.834 44.8419 26.5597 44.7009 26.3194C44.5598 26.0791 44.3574 25.8816 44.1149 25.7478L29.472 16.6013C29.0202 16.3521 28.5138 16.2214 27.9991 16.2214C27.4845 16.2214 26.9781 16.3521 26.5262 16.6013L11.8839 25.7451C11.6407 25.8787 11.4377 26.0762 11.2962 26.3168C11.1547 26.5574 11.08 26.8321 11.08 27.1121C11.08 27.392 11.1547 27.6667 11.2962 27.9073C11.4377 28.1479 11.6407 28.3454 11.8839 28.479Z" fill="#38437A"/>
                <path d="M11.8836 22.2543L26.5259 31.3981C26.9778 31.6471 27.4842 31.7776 27.9988 31.7776C28.5134 31.7776 29.0198 31.6471 29.4716 31.3981L44.1145 22.2543C45.1833 21.6646 45.1833 20.1123 44.1145 19.5231L29.4716 10.3799C29.0198 10.1306 28.5134 10 27.9988 10C27.4841 10 26.9777 10.1306 26.5259 10.3799L11.8836 19.5231C10.8131 20.1123 10.8131 21.6646 11.8836 22.2543Z" fill="#00C2FF"/>
                <path d="M26.5263 16.6013L14.6793 23.9993L26.5263 31.3978C26.9782 31.6468 27.4846 31.7773 27.9992 31.7773C28.5138 31.7773 29.0202 31.6468 29.472 31.3978L41.3196 23.9993L29.472 16.6013C29.0202 16.3521 28.5138 16.2214 27.9992 16.2214C27.4845 16.2214 26.9781 16.3521 26.5263 16.6013Z" fill="#269EE1"/>
                <path d="M31.4215 24.0068L41.3706 17.797L40.254 17.1073L35.2679 20.219L23.0222 12.5672L21.8738 13.2841L34.1115 20.9305L30.3038 23.3171L31.4215 24.0068Z" fill="white"/>
                <path d="M33.9025 28.6448L21.6288 21.0941L25.4005 18.7384L24.2468 18.0264L14.683 24.0003L15.8367 24.7124L20.481 21.811L32.7477 29.3573L33.9025 28.6448Z" fill="white"/>
                <path d="M56.32 18.8H64.96V20.176H61.392V30H59.888V20.176H56.32V18.8ZM65.9138 18.8H74.5538V20.176H70.9858V30H69.4818V20.176H65.9138V18.8Z" fill="#272F5A"/>
                <path d="M83.28 21.68L82.56 20.128V30H81.44V18.8H82.944L86.496 25.584L90.048 18.8H91.52V30H90.4V20.128L89.68 21.68L87.04 26.72H85.92L83.28 21.68ZM96.2331 30.112C95.4331 30.112 94.8198 29.9093 94.3931 29.504C93.9665 29.088 93.7531 28.5173 93.7531 27.792C93.7531 27.408 93.8118 27.0613 93.9291 26.752C94.0571 26.432 94.2545 26.1653 94.5211 25.952C94.7985 25.7387 95.1505 25.5733 95.5771 25.456C96.0038 25.3387 96.5158 25.28 97.1131 25.28H98.9371V24.56C98.9371 23.984 98.7931 23.5627 98.5051 23.296C98.2278 23.0187 97.7638 22.88 97.1131 22.88C96.5265 22.88 96.0838 22.9973 95.7851 23.232C95.4971 23.456 95.3318 23.7653 95.2891 24.16H94.1531C94.1745 23.8293 94.2491 23.5253 94.3771 23.248C94.5051 22.9707 94.6918 22.7307 94.9371 22.528C95.1825 22.3253 95.4865 22.1707 95.8491 22.064C96.2118 21.9467 96.6331 21.888 97.1131 21.888C98.0625 21.888 98.7771 22.1227 99.2571 22.592C99.7478 23.0613 99.9931 23.7173 99.9931 24.56V30H99.1771L99.0171 28.496C98.7398 29.008 98.3558 29.408 97.8651 29.696C97.3851 29.9733 96.8411 30.112 96.2331 30.112ZM96.3131 29.12C96.6758 29.12 97.0171 29.056 97.3371 28.928C97.6571 28.7893 97.9345 28.608 98.1691 28.384C98.4145 28.1493 98.6011 27.8827 98.7291 27.584C98.8678 27.2747 98.9371 26.9493 98.9371 26.608V26.24H97.1131C96.2918 26.24 95.7051 26.384 95.3531 26.672C95.0118 26.96 94.8411 27.3333 94.8411 27.792C94.8411 28.1973 94.9638 28.5227 95.2091 28.768C95.4651 29.0027 95.8331 29.12 96.3131 29.12ZM102.626 22H103.442L103.57 23.312C103.836 22.8533 104.194 22.5013 104.642 22.256C105.1 22.0107 105.628 21.888 106.226 21.888C107.143 21.888 107.863 22.1653 108.386 22.72C108.919 23.2747 109.186 24.1013 109.186 25.2V30H108.13V25.2C108.13 24.4213 107.948 23.84 107.586 23.456C107.223 23.072 106.716 22.88 106.066 22.88C105.362 22.88 104.791 23.0827 104.354 23.488C103.927 23.8933 103.703 24.432 103.682 25.104V30H102.626V22ZM113.749 30.112C112.949 30.112 112.335 29.9093 111.909 29.504C111.482 29.088 111.269 28.5173 111.269 27.792C111.269 27.408 111.327 27.0613 111.445 26.752C111.573 26.432 111.77 26.1653 112.037 25.952C112.314 25.7387 112.666 25.5733 113.093 25.456C113.519 25.3387 114.031 25.28 114.629 25.28H116.453V24.56C116.453 23.984 116.309 23.5627 116.021 23.296C115.743 23.0187 115.279 22.88 114.629 22.88C114.042 22.88 113.599 22.9973 113.301 23.232C113.013 23.456 112.847 23.7653 112.805 24.16H111.669C111.69 23.8293 111.765 23.5253 111.893 23.248C112.021 22.9707 112.207 22.7307 112.453 22.528C112.698 22.3253 113.002 22.1707 113.365 22.064C113.727 21.9467 114.149 21.888 114.629 21.888C115.578 21.888 116.293 22.1227 116.773 22.592C117.263 23.0613 117.509 23.7173 117.509 24.56V30H116.693L116.533 28.496C116.255 29.008 115.871 29.408 115.381 29.696C114.901 29.9733 114.357 30.112 113.749 30.112ZM113.829 29.12C114.191 29.12 114.533 29.056 114.853 28.928C115.173 28.7893 115.45 28.608 115.685 28.384C115.93 28.1493 116.117 27.8827 116.245 27.584C116.383 27.2747 116.453 26.9493 116.453 26.608V26.24H114.629C113.807 26.24 113.221 26.384 112.869 26.672C112.527 26.96 112.357 27.3333 112.357 27.792C112.357 28.1973 112.479 28.5227 112.725 28.768C112.981 29.0027 113.349 29.12 113.829 29.12ZM122.797 29.792C122.328 29.792 121.901 29.712 121.517 29.552C121.133 29.392 120.803 29.1627 120.525 28.864C120.259 28.5547 120.045 28.176 119.885 27.728C119.736 27.28 119.661 26.768 119.661 26.192V25.488C119.661 24.912 119.736 24.4053 119.885 23.968C120.045 23.52 120.264 23.1413 120.541 22.832C120.819 22.5227 121.149 22.288 121.533 22.128C121.917 21.968 122.339 21.888 122.797 21.888C123.384 21.888 123.901 22.0053 124.349 22.24C124.808 22.4747 125.171 22.832 125.437 23.312L125.565 22H126.381V30C126.381 31.0667 126.099 31.8827 125.533 32.448C124.979 33.024 124.184 33.312 123.149 33.312C122.147 33.312 121.4 33.0933 120.909 32.656C120.429 32.2187 120.147 31.6267 120.061 30.88H121.117C121.203 31.3387 121.395 31.6907 121.693 31.936C121.992 32.192 122.477 32.32 123.149 32.32C123.885 32.32 124.429 32.1333 124.781 31.76C125.144 31.3867 125.325 30.8 125.325 30V28.544C125.048 28.96 124.696 29.2747 124.269 29.488C123.843 29.6907 123.352 29.792 122.797 29.792ZM123.037 28.8C123.368 28.8 123.667 28.7467 123.933 28.64C124.211 28.5227 124.451 28.3573 124.653 28.144C124.856 27.92 125.016 27.6587 125.133 27.36C125.251 27.0507 125.315 26.704 125.325 26.32V25.376C125.304 24.576 125.08 23.9627 124.653 23.536C124.237 23.0987 123.699 22.88 123.037 22.88C122.344 22.88 121.789 23.104 121.373 23.552C120.957 23.9893 120.749 24.6347 120.749 25.488V26.192C120.749 27.0347 120.957 27.68 121.373 28.128C121.8 28.576 122.355 28.8 123.037 28.8ZM132.054 30.112C130.998 30.112 130.161 29.792 129.542 29.152C128.924 28.5013 128.614 27.568 128.614 26.352V25.648C128.614 24.4427 128.924 23.5147 129.542 22.864C130.172 22.2133 131.009 21.888 132.054 21.888C133.1 21.888 133.932 22.2133 134.55 22.864C135.18 23.5147 135.494 24.4427 135.494 25.648V26.304H129.702V26.352C129.702 27.28 129.916 27.9733 130.342 28.432C130.769 28.8907 131.34 29.12 132.054 29.12C132.716 29.12 133.217 28.9813 133.558 28.704C133.91 28.4267 134.166 28.08 134.326 27.664H135.414C135.329 28.0053 135.201 28.3253 135.03 28.624C134.86 28.9227 134.636 29.184 134.358 29.408C134.081 29.6213 133.75 29.792 133.366 29.92C132.982 30.048 132.545 30.112 132.054 30.112ZM132.054 22.88C131.361 22.88 130.806 23.0987 130.39 23.536C129.985 23.9627 129.756 24.576 129.702 25.376H134.39C134.348 24.544 134.113 23.92 133.686 23.504C133.27 23.088 132.726 22.88 132.054 22.88ZM137.735 22H138.551L138.679 23.312C138.935 22.8533 139.276 22.5013 139.703 22.256C140.14 22.0107 140.626 21.888 141.159 21.888C141.735 21.888 142.236 22.0213 142.663 22.288C143.09 22.5547 143.415 22.9547 143.639 23.488C143.884 22.976 144.236 22.5813 144.695 22.304C145.164 22.0267 145.703 21.888 146.311 21.888C146.727 21.888 147.106 21.9573 147.447 22.096C147.788 22.2347 148.082 22.448 148.327 22.736C148.572 23.0133 148.759 23.36 148.887 23.776C149.026 24.1813 149.095 24.656 149.095 25.2V30H148.039V25.2C148.039 24.432 147.863 23.856 147.511 23.472C147.159 23.0773 146.679 22.88 146.071 22.88C145.783 22.88 145.511 22.9333 145.255 23.04C145.01 23.1467 144.791 23.3013 144.599 23.504C144.407 23.696 144.252 23.9307 144.135 24.208C144.018 24.4747 143.954 24.7733 143.943 25.104V25.2V30H142.887V25.2C142.887 24.432 142.711 23.856 142.359 23.472C142.007 23.0773 141.527 22.88 140.919 22.88C140.631 22.88 140.359 22.9333 140.103 23.04C139.858 23.1467 139.639 23.3013 139.447 23.504C139.255 23.696 139.1 23.9307 138.983 24.208C138.866 24.4747 138.802 24.7733 138.791 25.104V30H137.735V22ZM154.695 30.112C153.639 30.112 152.802 29.792 152.183 29.152C151.564 28.5013 151.255 27.568 151.255 26.352V25.648C151.255 24.4427 151.564 23.5147 152.183 22.864C152.812 22.2133 153.65 21.888 154.695 21.888C155.74 21.888 156.572 22.2133 157.191 22.864C157.82 23.5147 158.135 24.4427 158.135 25.648V26.304H152.343V26.352C152.343 27.28 152.556 27.9733 152.983 28.432C153.41 28.8907 153.98 29.12 154.695 29.12C155.356 29.12 155.858 28.9813 156.199 28.704C156.551 28.4267 156.807 28.08 156.967 27.664H158.055C157.97 28.0053 157.842 28.3253 157.671 28.624C157.5 28.9227 157.276 29.184 156.999 29.408C156.722 29.6213 156.391 29.792 156.007 29.92C155.623 30.048 155.186 30.112 154.695 30.112ZM154.695 22.88C154.002 22.88 153.447 23.0987 153.031 23.536C152.626 23.9627 152.396 24.576 152.343 25.376H157.031C156.988 24.544 156.754 23.92 156.327 23.504C155.911 23.088 155.367 22.88 154.695 22.88ZM160.376 22H161.192L161.32 23.312C161.586 22.8533 161.944 22.5013 162.392 22.256C162.85 22.0107 163.378 21.888 163.976 21.888C164.893 21.888 165.613 22.1653 166.136 22.72C166.669 23.2747 166.936 24.1013 166.936 25.2V30H165.88V25.2C165.88 24.4213 165.698 23.84 165.336 23.456C164.973 23.072 164.466 22.88 163.816 22.88C163.112 22.88 162.541 23.0827 162.104 23.488C161.677 23.8933 161.453 24.432 161.432 25.104V30H160.376V22ZM168.463 22H169.903V19.76H170.959V22H173.103V22.96H170.959V27.76C170.959 28.6133 171.353 29.04 172.143 29.04H173.263V30H172.015C171.321 30 170.793 29.824 170.431 29.472C170.079 29.1093 169.903 28.5813 169.903 27.888V22.96H168.463V22Z" fill="#272F5A"/>
              </svg>
            </a>
          </Sider>
          <Layout>
            <Content
              className="content"
              style={{
                padding: 24,
                margin: 0
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
