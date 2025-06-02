import { compare } from 'bcryptjs'

test('cu', async () => {
  const validation = compare(
    '123456',
    '$2a$08$zq9q8RyGHhYqP9ClIuKn3ej2tU2cU4fRUzkTquDNvJHIEHrrFgxzK'
  )

  expect(validation).toBeTruthy()
})
