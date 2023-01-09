import { Get } from "../server"

export function getUserInfo(id) { ... }

export function getUserName(id) { ... }

export function userApi(id:number){
	getUserInfo(id),
	getUserName(id)
}