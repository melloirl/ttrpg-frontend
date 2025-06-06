import { USER_ROLE } from '@/enums/user-role'

export const mockAuthData = {
  users: [
    {
      id: 1,
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin',
      role: USER_ROLE.DM,
    },
    {
      id: 2,
      name: 'Player',
      email: 'player@player.com',
      password: 'player',
      role: USER_ROLE.PLAYER,
    },
  ],
  tokens: new Map<string, number>(),

  generateToken(userId: number) {
    const token = `mock-jwt-token-${userId}-${Date.now()}`
    this.tokens.set(token, userId)
    return token
  },

  validateToken(token: string) {
    return this.tokens.get(token) || null
  },

  revokeToken(token: string) {
    this.tokens.delete(token)
  },
}
