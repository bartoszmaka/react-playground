import { useEffect, useState } from 'react';

export default (func, interval) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    setInterval(() => {
      func().then(result => {
        setData(result)
      })
    }, interval)
    func().then(result => {
      setData(result)
      setIsLoading(false)
    })
    return clearInterval(interval)
  }, [])


  console.log({isLoading, data})
  return [isLoading, data]
}
