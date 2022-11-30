// JSON Stringify circular reference replacer (this can be deserialized if need to recover references, just check link below)
// https://stackoverflow.com/questions/10392293/stringify-convert-to-json-a-javascript-object-with-circular-reference/12659424

const circularRefReplacer = (): any => {
  const m = new Map()
  const v = new Map()
  let init: any = null

  return (field: string, value: any) => {
    // Then, remove the circular references
    const p = m.get(this) + (Array.isArray(this) ? `[${field}]` : '.' + field)
    const isComplex = value === Object(value)

    if (isComplex) m.set(value, p)

    const pp = v.get(value) || ''
    const path = p.replace(/undefined\.\.?/, '')
    let val = pp ? `#REF:${pp[0] === '[' ? '$' : '$.'}${pp}` : value

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !init ? (init = value) : val === init ? (val = '#REF:$') : 0
    if (!pp && isComplex) v.set(value, path)

    // Finally, replace the undefined values with a string "undefined"
    if (typeof val === 'undefined') {
      return 'undefined'
    }
    return val
  }
}

export default circularRefReplacer
