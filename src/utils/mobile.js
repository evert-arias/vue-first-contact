const isMobileOS = (userAgent) => {
  const ua = userAgent || navigator.userAgent
  const ipad = /(iPad).*OS\s([\d_]+)/.test(ua)
  const iphone = !ipad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
  const android = /(Android);?[\s/]+([\d.]+)?/.test(ua)

  return android || iphone || ipad
}

export { isMobileOS }
