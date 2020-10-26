class ApiError extends Error {
	code: number = 0
}
class HttpError extends Error {
	statusCode: number = 200
}

// 写法1  (优一点)
function isApiError(error: Error) {
	if (error instanceof ApiError) {
		return true
	}
	return false
}

// 写法2
function isApiError2(error: Error) {
	if (typeof (error as ApiError).code === 'number') {
		return true
	}
	return false
}
