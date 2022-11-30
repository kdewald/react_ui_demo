import { useEffect, useRef } from 'react'

function useTraceUpdate(props: any, type: string = 'props') {
  const prev = useRef(props)
  useEffect(() => {
    const changedProps = Object.entries(props).reduce<any>((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v]
      }
      return ps
    }, {})
    if (Object.keys(changedProps).length > 0) {
      // eslint-disable-next-line no-console
      console.log(`Changed ${type}:`, changedProps)
    }
    prev.current = props
  })
}

export default useTraceUpdate

// Usage example
// import useTraceUpdate from '../../../utils/useTraceUpdate'
//   function MyComponent(props) {
//     useTraceUpdate(props);
//     return <div>{props.children}</div>;
//   }
