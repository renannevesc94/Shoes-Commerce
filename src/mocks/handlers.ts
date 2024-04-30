import { handlers as AuthHandle } from "./handles/AuthHandle";
import { handlers as CardsHandle } from "./handles/CardsHandle";
import { highlightBannerHandle } from "./handles/HighLigthBannerHandle";

export default [...AuthHandle, ...CardsHandle, ...highlightBannerHandle];
