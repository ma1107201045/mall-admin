export function hasAnyAuthority(permission: string): boolean {
  let menuPermissions: string | null = localStorage.getItem('menuPermissions')
  return menuPermissions ? menuPermissions.split(',').some(item => item === permission) : false
}

export function notHasAnyAuthority(permission: string): boolean {
  return !hasAnyAuthority(permission)
}
