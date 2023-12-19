import {Button} from 'react-aria-components';
import {diff} from "../../../../submodule/utils/src/utils/array/diff.mjs";

export function MyButton() {
   const test = diff([2,1,4], [1,4,5,6])
   console.log(test)
   return <Button>test</Button>
}
