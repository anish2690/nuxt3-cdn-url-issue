export function hello() {
    return 'hello';
}

export const TAG_NAME = {
    COLUMN: 'c-column',
  }

  export const list = async () => {
    const { currency }  = await import('./currency_helper1')

      return currency
  }