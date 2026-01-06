# Third-Party Integrations

LinkSheet includes several experimental integrations to enhance privacy and utility.

## ClearURLs

**Integration:** [ClearURLs](https://github.com/ClearURLs)  
**Purpose:** Removes tracking parameters from URLs.

LinkSheet can automatically strip known tracking parameters (like `utm_source`) from URLs before opening them. This helps preserve your privacy across the web.

*Report issues:* [clearurlkt](https://github.com/1fexd/clearurlkt)

## FastForward

**Integration:** [FastForward](https://github.com/FastForwardTeam/FastForward)  
**Purpose:** Bypasses link shorteners and tracking redirects.

LinkSheet integrates FastForward rules to extract the final destination URL from intermediate redirects, saving you time and avoiding potential trackers.

*Report issues:* [fastforwardkt](https://github.com/1fexd/fastforwardkt)

## LibRedirect

**Integration:** [LibRedirect](https://github.com/libredirect/libredirect)  
**Purpose:** Redirects traffic from popular proprietary services to privacy-friendly frontends.

**Features:**

* Redirects services like YouTube, Twitter, Instagram, etc., to instances like Invidious, Nitter, Piped, etc.
* **Pro Feature:** Resolve redirects either locally or via a privacy-focused API hosted at supabase.com.

*Report issues:* [libredirectkt](https://github.com/1fexd/libredirectkt)
