import { time, type TimeDate } from '@distributedlab/tools'

const FORMATTED_DID_MAX_LENGTH = 12

export function formatDid(did: string) {
  return did.length > FORMATTED_DID_MAX_LENGTH ? did.slice(0, 8) + '...' + did.slice(-4) : did
}

export function formatDateDMY(date: TimeDate) {
  return time(date).format('DD MMM YYYY')
}

export function formatDateDMYT(date: TimeDate) {
  return time(date).format('DD MMM YYYY HH:mm')
}

export function formatDateDiff(dateEnd: TimeDate) {
  return time(dateEnd).fromNow
}
