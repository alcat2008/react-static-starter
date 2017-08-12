import React from 'react'
import NavLink from '../components/NavLink'

export default function NotFound() {
  return (
    <div id='page-404'>
      <section>
        <h1>404</h1>
        <p>你要找的页面不存在 <NavLink href='/'>返回首页</NavLink></p>
      </section>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  )
}
