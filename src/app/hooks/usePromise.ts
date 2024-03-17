import {Observable} from "rxjs";
import {signal} from "@angular/core";

const usePromise = <T>(ob: Observable<T>) => {
  const result = signal<{result: T, pending: boolean}>({result: null as T, pending: true});
  ob.subscribe(res => {
    result.update(data => {
      data.pending = false;
      data.result = res;
      return data;
    })
  })
  return result;
}

export default usePromise;
