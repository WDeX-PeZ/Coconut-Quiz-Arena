// Coconut Quiz Arena - PWA Update System
// Tăng số phiên bản mỗi lần phát hành bản mới.

const CACHE_NAME = "cqa-quiz-arena-v2";

// Tự xác định thư mục ứng dụng trên GitHub Pages.
// Cách này hoạt động cả khi repository nằm trong /ten-repo/.
const HOME_URL = new URL("./", self.registration.scope).href;

// Cài đặt phiên bản mới và lưu trang chính vào cache mới.
self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const response = await fetch(
      new Request(HOME_URL, { cache: "reload" })
    );

    if (!response.ok) {
      throw new Error("Không tải được trang Coconut Quiz Arena.");
    }

    const cache = await caches.open(CACHE_NAME);
    await cache.put(HOME_URL, response);
  })());
});

// Kích hoạt phiên bản mới và dọn cache cũ của Coconut Quiz Arena.
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(key =>
          key.startsWith("cqa-quiz-arena-") &&
          key !== CACHE_NAME
        )
        .map(key => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

// Chỉ kích hoạt ngay khi người dùng bấm nút Cập nhật.
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Ưu tiên bản ứng dụng đã cache để tránh đổi phiên bản giữa lúc đang dùng.
// Khi chưa có cache, thử tải từ mạng.
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (
    request.method !== "GET" ||
    request.mode !== "navigate"
  ) {
    return;
  }

  const url = new URL(request.url);
  const scope = new URL(self.registration.scope);

  if (
    url.origin !== scope.origin ||
    !url.pathname.startsWith(scope.pathname)
  ) {
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    const cached =
      await cache.match(request) ||
      await cache.match(HOME_URL);

    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(request);

      if (response.ok) {
        await cache.put(HOME_URL, response.clone());
      }

      return response;
    } catch (error) {
      return new Response(
        "Bạn đang ngoại tuyến. Hãy kết nối Internet rồi thử lại.",
        {
          status: 503,
          headers: {
            "Content-Type": "text/plain; charset=utf-8"
          }
        }
      );
    }
  })());
});
