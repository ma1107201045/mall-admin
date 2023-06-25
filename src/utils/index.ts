export function hasAnyAuthority(permission: string): boolean {
  let menuPermissions: string | null = localStorage.getItem('menuPermissions')
  if (menuPermissions === null) {
    return false
  }
  return menuPermissions.split(',').some(item => item === permission)
}

export function notHasAnyAuthority(permission: string): boolean {
  return !hasAnyAuthority(permission)
}
