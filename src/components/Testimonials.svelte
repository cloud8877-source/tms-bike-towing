<script lang="ts">
  export let title: string = "Testimonials";

  const testimonials = [
    {
      name: "Andrew Cheong",
      date: "November 2025",
      quote:
        "Massive thanks to TMS BIKE Towing team. They are kind, reliable, and help us wholeheartedly during the worst flooding in Hatyai! Thanks for helping us through each and every critical moment. Because of them, we managed to escape and made home safe (ourselves and car).",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Suren Pillai",
      date: "November 2025",
      quote:
        "One of the best towing service in Thailand. The owner is a very helpful person. Helped us thru the flood without expecting anything in return.",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Jenn Yeu",
      date: "November 2025",
      quote:
        "值得推荐的保险公司，骑行去泰国游玩买保险值得推荐的一家，客服五星⭐⭐⭐⭐⭐，whatapp可以以流利的中文沟通，服务到位，信息可以说是及时回复，可以安心，沟通内容的解释也详细理解👍👍👍",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Ling Chia",
      date: "October 2025",
      quote:
        "办事效率高、沟通愉快、响应迅速、条款解释清晰……好服务值得分享，而最好的服务永远在路上加油。",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Simpson Poh",
      date: "October 2025",
      quote:
        "经过朋友的介绍联络到John，驾车驾摩托进泰国的都可以询问他关于保险。专业，人也很好聊。感谢",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Alvin Tan",
      date: "October 2025",
      quote: "去泰国 找tms bike towing 谢谢老板 帮我搞定全部",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Stephen Tee",
      date: "October 2025",
      quote:
        "我最近透过 TMS Bike Towing 购买泰国摩托车保险，对他们的专业态度与服务质量感到非常满意。整个过程顺畅、资讯清晰，让我在跨境骑行前更加安心与有信心。以往我在购买泰国保险时几乎是一知半解，只是随便买了就上路。直到这次经由 TMS Bike Towing 的讲解，我才真正明白保险的重要性。他们详细说明了保障范围、理赔流程以及在泰国骑行可能面临的风险，让我深刻体会到出国骑车一定要有完善保险保障的重要性。特别感谢协助我的那位负责人，他为人谦逊、态度友善、讲解清楚，让整个购买过程轻松又放心。",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Steven Lau",
      date: "October 2025",
      quote:
        "速度快，服务好，人友善，讲解细，没得挑。 Kecekapan tinggi, sikap mesra, perkhidmatan yang sangat memuaskan, sangat disyorkan。High efficiency, friendly attitude, very satisfactory service, highly recommended。ประสิทธิภาพสูง ทัศนคติที่เป็นมิตร บริการน่าพอใจมาก แนะนำเป็นอย่างยิ่ง。",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Devis Lee",
      date: "October 2025",
      quote: "Service good, fast respond, cheaper price, recommend 👍👍👍",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Richard Cheong",
      date: "October 2025",
      quote: "The service is professional and very efficient",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Max Ng",
      date: "October 2025",
      quote: "五个字,做到做倒你👍👍👍",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Helo Ng",
      date: "October 2025",
      quote: "在泰國tms bike towing一流的服務",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Mei Peng",
      date: "August 2025",
      quote: "Good customer service, Fast and efficient 👍",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Venus Goh",
      date: "April 2025",
      quote:
        "老板服务超级一流，发生些小意外进了医院在一个小时的路程来医院接我回酒店（也要一个小时左右才回到酒店），那有一家保险公司有这样的服务。👍👍👍👍 但是买了保险是保障（真的不要有机会用哦😇）",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Alex Leong Wen Xin",
      date: "April 2025",
      quote:
        "Good customer service, prompt responses. Provides car/bike insurance services for MY-TH crossing, hassle free when crossing border. 👍👍",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Eddie Pay",
      date: "February 2025",
      quote: "老板很用心了解顾客们需求，会一直 Update 情况",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "C Ho Tack",
      date: "February 2025",
      quote:
        "John provides good service to his customers. From my own experience, he personally came to attend towing services to my friends from Pattani to Hatyai and arranged transport for them too.",
      image: "/images/reviews/fb-placeholder.svg",
    },
    {
      name: "Justin Leong",
      date: "January 2025",
      quote:
        "This Towing Company such amazing services, they not only cover whole Thailand, also Malaysia & Singapore. How big of you!",
      image: "/images/reviews/fb-placeholder.svg",
    },
  ];

  // Chunk testimonials into columns for masonry effect
  function chunkIntoColumns<T>(array: T[], numColumns: number): T[][] {
    const columns: T[][] = Array.from({ length: numColumns }, () => []);
    array.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  }

  $: desktopColumns = chunkIntoColumns(testimonials, 3);
  $: tabletColumns = chunkIntoColumns(testimonials, 2);
</script>

<section class="py-20">
  <div class="max-w-6xl mx-auto px-4 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12 reveal">
      <p
        class="text-primary font-semibold uppercase tracking-wider text-sm mb-3"
      >
        Reviews
      </p>
      <h2
        class="text-3xl lg:text-4xl font-bold text-text-main tracking-tight"
        style="letter-spacing: -0.02em;"
      >
        {title}
      </h2>
    </div>

    <!-- Desktop Grid (3 columns) -->
    <div class="hidden lg:grid lg:grid-cols-3 gap-4">
      {#each desktopColumns as column}
        <div class="space-y-4">
          {#each column as testimonial}
            <article class="card-3d-glass p-6">
              <!-- Author -->
              <div class="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  class="w-10 h-10 rounded-full object-cover bg-gray-100"
                  loading="lazy"
                />
                <div>
                  <div class="font-semibold text-text-main">
                    {testimonial.name}
                  </div>
                  <div
                    class="flex items-center gap-1.5 text-xs text-text-secondary"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-[#1877F2]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                      />
                    </svg>
                    <span>Recommends</span>
                    <span class="text-gray-300">·</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>

              <!-- Quote -->
              <blockquote class="text-text-secondary leading-relaxed">
                {testimonial.quote}
              </blockquote>
            </article>
          {/each}
        </div>
      {/each}
    </div>

    <!-- Tablet Grid (2 columns) -->
    <div class="hidden md:grid md:grid-cols-2 lg:hidden gap-4">
      {#each tabletColumns as column}
        <div class="space-y-4">
          {#each column as testimonial}
            <article class="card-3d-glass p-6">
              <!-- Author -->
              <div class="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  class="w-10 h-10 rounded-full object-cover bg-gray-100"
                  loading="lazy"
                />
                <div>
                  <div class="font-semibold text-text-main">
                    {testimonial.name}
                  </div>
                  <div
                    class="flex items-center gap-1.5 text-xs text-text-secondary"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-[#1877F2]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                      />
                    </svg>
                    <span>Recommends</span>
                    <span class="text-gray-300">·</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>

              <!-- Quote -->
              <blockquote class="text-text-secondary leading-relaxed">
                {testimonial.quote}
              </blockquote>
            </article>
          {/each}
        </div>
      {/each}
    </div>

    <!-- Mobile Horizontal Scroll -->
    <div
      class="md:hidden flex gap-4 overflow-x-auto scroll-snap-x pb-4 -mx-4 px-4"
      role="region"
      aria-label="Customer reviews"
    >
      {#each testimonials as testimonial}
        <article
          class="flex-shrink-0 w-[280px] card-3d-glass p-6 scroll-snap-start"
        >
          <!-- Author -->
          <div class="flex items-center gap-3 mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              class="w-10 h-10 rounded-full object-cover bg-gray-100"
              loading="lazy"
            />
            <div>
              <div class="font-semibold text-text-main text-sm">
                {testimonial.name}
              </div>
              <div
                class="flex items-center gap-1.5 text-xs text-text-secondary"
              >
                <svg
                  class="w-3.5 h-3.5 text-[#1877F2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                  />
                </svg>
                <span>Recommends</span>
              </div>
            </div>
          </div>

          <!-- Quote -->
          <blockquote class="text-text-secondary text-sm leading-relaxed">
            {testimonial.quote}
          </blockquote>

          <div class="text-xs text-gray-400 mt-3">{testimonial.date}</div>
        </article>
      {/each}
    </div>

    <!-- Facebook Link -->
    <div class="text-center mt-12 reveal">
      <a
        href="https://www.facebook.com/profile.php?id=61560761347672"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
        See all reviews on Facebook
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  /* Mobile horizontal scroll */
  .scroll-snap-x {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .scroll-snap-x::-webkit-scrollbar {
    display: none;
  }

  .scroll-snap-start {
    scroll-snap-align: start;
  }

  /* Card shadow */
  .card-shadow {
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.04),
      0 4px 12px rgba(0, 0, 0, 0.03);
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .scroll-snap-x {
      scroll-snap-type: none;
    }
  }
</style>
