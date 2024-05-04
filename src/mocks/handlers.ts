import { handlers as AuthHandle } from "./handles/AuthHandle";
import { handlers as CardsHandle } from "./handles/CardsHandle";
import { handlers as NewsletterHandle } from "./handles/NewsletterHandle";
import { handlers as highlightBannerHandle } from "./handles/HighLigthBannerHandle";

export default [...AuthHandle, ...CardsHandle, ...highlightBannerHandle, ...NewsletterHandle];
