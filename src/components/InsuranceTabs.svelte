<script lang="ts">
  let activeTab = "motorcycle";

  const tabs = [
    { id: "motorcycle", label: "Motorcycle", icon: "🏍️" },
    { id: "car", label: "Car", icon: "🚗" },
    { id: "travel", label: "Travel", icon: "✈️" },
  ];

  // Motorcycle insurance data
  const motorcycleCompulsory = [
    { code: "1.30A", cc: "UP TO 75CC", m3: "RM 35", m6: "RM 45", y1: "RM 60" },
    {
      code: "1.30B",
      cc: "76CC TO 125CC",
      m3: "RM 45",
      m6: "RM 60",
      y1: "RM 85",
    },
    {
      code: "1.30C",
      cc: "126CC TO 150CC",
      m3: "RM 50",
      m6: "RM 65",
      y1: "RM 100",
    },
    {
      code: "1.30D",
      cc: "151CC TO ABOVE",
      m3: "RM 60",
      m6: "RM 85",
      y1: "RM 135",
    },
  ];

  const motorcycleVoluntary = [
    {
      code: "CB3610/2M",
      desc: "MOTORCYCLE (2 MONTHS @ 60 DAY)",
      price: "RM 135",
    },
    {
      code: "CB3610/3M",
      desc: "MOTORCYCLE (3 MONTHS @ 90 DAY)",
      price: "RM 165",
    },
    {
      code: "CB3610/1Y",
      desc: "MOTORCYCLE (1 YEAR @ 365 DAY)",
      price: "RM 350",
    },
  ];

  // Car insurance data
  const carCompulsory = [
    {
      type: "CAR - SEAT 2-7 (1.10)",
      d8: "RM 28",
      d18: "RM 36",
      m1: "RM 48",
      y1: "RM 125",
    },
    {
      type: "VAN - SEAT 8-15 (1.20A)",
      d8: "RM 40",
      d18: "RM 50",
      m1: "RM 65",
      y1: "RM 200",
    },
    {
      type: "PICK UP (1.40A) 2 DOORS",
      d8: "RM 38",
      d18: "RM 48",
      m1: "RM 58",
      y1: "RM 180",
    },
  ];

  const carVoluntary = [
    {
      type: "CAR - SEAT 2-7 (1.10)",
      d8: "RM 105",
      d18: "RM 137",
      m1: "RM 182",
      y1: "RM 330",
    },
    {
      type: "VAN - SEAT 8-15 (1.20A)",
      d8: "RM 130",
      d18: "RM 177",
      m1: "RM 232",
      y1: "RM 580",
    },
    {
      type: "PICK UP (1.40A) 2 DOORS",
      d8: "RM 112",
      d18: "RM 147",
      m1: "RM 192",
      y1: "RM 450",
    },
  ];

  // Travel insurance data
  const travelInsurance = [
    { duration: "1-5 days", price: "RM 57" },
    { duration: "6-10 days", price: "RM 81" },
    { duration: "11-15 days", price: "RM 109" },
    { duration: "16-20 days", price: "RM 125" },
    { duration: "21-31 days", price: "RM 153" },
  ];
</script>

<div class="max-w-4xl mx-auto">
  <!-- Tab Navigation -->
  <div class="flex border-b border-gray-200 mb-8">
    {#each tabs as tab}
      <button
        class="flex-1 px-4 py-4 text-center font-medium transition-all relative group shadow-none"
        class:text-[#1170FF]={activeTab === tab.id}
        class:text-[#94a3b8]={activeTab !== tab.id}
        on:click={() => (activeTab = tab.id)}
      >
        <span
          class="text-2xl mb-2 block group-hover:scale-110 transition-transform"
          >{tab.icon}</span
        >
        <span class="tracking-wide text-sm uppercase">{tab.label}</span>
        {#if activeTab === tab.id}
          <div
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1170FF] shadow-[0_0_10px_rgba(17,112,255,0.5)]"
          ></div>
        {/if}
      </button>
    {/each}
  </div>

  <!-- Motorcycle Tab -->
  {#if activeTab === "motorcycle"}
    <div class="space-y-12 animate-fadeIn">
      <!-- Compulsory Insurance -->
      <div class="card-3d-glass p-6 md:p-8">
        <h3 class="text-xl font-bold mb-4 text-[#101418]">
          Motorcycle Compulsory Insurance
        </h3>
        <p class="text-[#64748b] text-sm mb-6">
          Coverage for Medical Only (只限赔偿医疗费用而已)
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="text-xs text-[#64748b] uppercase bg-black/5">
              <tr>
                <th class="px-6 py-3 rounded-l-lg">Code</th>
                <th class="px-6 py-3">CC</th>
                <th class="px-6 py-3 text-center">3 Months</th>
                <th class="px-6 py-3 text-center">6 Months</th>
                <th class="px-6 py-3 text-center rounded-r-lg">1 Year</th>
              </tr>
            </thead>
            <tbody class="text-[#334155]">
              {#each motorcycleCompulsory as row}
                <tr
                  class="border-b border-gray-200 hover:bg-black/5 transition-colors"
                >
                  <td class="px-6 py-4 font-mono text-primary">{row.code}</td>
                  <td class="px-6 py-4">{row.cc}</td>
                  <td class="px-6 py-4 text-center">{row.m3}</td>
                  <td class="px-6 py-4 text-center">{row.m6}</td>
                  <td class="px-6 py-4 text-center font-bold text-[#101418]"
                    >{row.y1}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Voluntary Insurance -->
      <div class="card-3d-glass p-6 md:p-8">
        <h3 class="text-xl font-bold mb-4 text-[#101418]">
          Motorcycle Voluntary Insurance
        </h3>
        <p class="text-[#64748b] text-sm mb-6">
          Coverage for Third-Party (只限赔偿对方交通工具损坏而已)
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="text-xs text-[#64748b] uppercase bg-black/5">
              <tr>
                <th class="px-6 py-3 rounded-l-lg">Code</th>
                <th class="px-6 py-3">Description</th>
                <th class="px-6 py-3 text-center rounded-r-lg">Price</th>
              </tr>
            </thead>
            <tbody class="text-[#334155]">
              {#each motorcycleVoluntary as row}
                <tr
                  class="border-b border-gray-200 hover:bg-black/5 transition-colors"
                >
                  <td class="px-6 py-4 font-mono text-primary">{row.code}</td>
                  <td class="px-6 py-4">{row.desc}</td>
                  <td class="px-6 py-4 text-center font-bold text-[#101418]"
                    >{row.price}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  {/if}

  <!-- Car Tab -->
  {#if activeTab === "car"}
    <div class="space-y-12 animate-fadeIn">
      <!-- Compulsory Insurance -->
      <div class="card-3d-glass p-6 md:p-8">
        <h3 class="text-xl font-bold mb-4 text-[#101418]">
          Car Compulsory Insurance
        </h3>
        <p class="text-[#64748b] text-sm mb-6">
          Coverage for Medical Only (只限赔偿医疗费用而已)
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="text-xs text-[#64748b] uppercase bg-black/5">
              <tr>
                <th class="px-6 py-3 rounded-l-lg">Vehicle Type</th>
                <th class="px-6 py-3 text-center">8 Days</th>
                <th class="px-6 py-3 text-center">18 Days</th>
                <th class="px-6 py-3 text-center">1 Month</th>
                <th class="px-6 py-3 text-center rounded-r-lg">1 Year</th>
              </tr>
            </thead>
            <tbody class="text-[#334155]">
              {#each carCompulsory as row}
                <tr
                  class="border-b border-gray-200 hover:bg-black/5 transition-colors"
                >
                  <td class="px-6 py-4 font-medium">{row.type}</td>
                  <td class="px-6 py-4 text-center">{row.d8}</td>
                  <td class="px-6 py-4 text-center">{row.d18}</td>
                  <td class="px-6 py-4 text-center">{row.m1}</td>
                  <td class="px-6 py-4 text-center font-bold text-[#101418]"
                    >{row.y1}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Voluntary Insurance -->
      <div class="card-3d-glass p-6 md:p-8">
        <h3 class="text-xl font-bold mb-4 text-[#101418]">
          Car Voluntary Insurance
        </h3>
        <p class="text-[#64748b] text-sm mb-6">
          Coverage for Third-Party (只限赔偿对方交通工具损坏而已)
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="text-xs text-[#64748b] uppercase bg-black/5">
              <tr>
                <th class="px-6 py-3 rounded-l-lg">Vehicle Type</th>
                <th class="px-6 py-3 text-center">8 Days</th>
                <th class="px-6 py-3 text-center">18 Days</th>
                <th class="px-6 py-3 text-center">1 Month</th>
                <th class="px-6 py-3 text-center rounded-r-lg">1 Year</th>
              </tr>
            </thead>
            <tbody class="text-[#334155]">
              {#each carVoluntary as row}
                <tr
                  class="border-b border-gray-200 hover:bg-black/5 transition-colors"
                >
                  <td class="px-6 py-4 font-medium">{row.type}</td>
                  <td class="px-6 py-4 text-center">{row.d8}</td>
                  <td class="px-6 py-4 text-center">{row.d18}</td>
                  <td class="px-6 py-4 text-center">{row.m1}</td>
                  <td class="px-6 py-4 text-center font-bold text-[#101418]"
                    >{row.y1}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  {/if}

  <!-- Travel Tab -->
  {#if activeTab === "travel"}
    <div class="animate-fadeIn card-3d-glass p-6 md:p-8">
      <h3 class="text-xl font-bold mb-4 text-[#101418]">Travel Insurance</h3>
      <p class="text-[#64748b] text-sm mb-6">
        Individual coverage (Age 30 days - 69 years) - Zone 1
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="text-xs text-[#64748b] uppercase bg-black/5">
            <tr>
              <th class="px-6 py-3 rounded-l-lg">Duration</th>
              <th class="px-6 py-3 text-center rounded-r-lg"
                >Executive - Zone 1</th
              >
            </tr>
          </thead>
          <tbody class="text-[#334155]">
            {#each travelInsurance as row}
              <tr
                class="border-b border-gray-200 hover:bg-black/5 transition-colors"
              >
                <td class="px-6 py-4 font-medium">{row.duration}</td>
                <td class="px-6 py-4 text-center font-bold text-[#101418]"
                  >{row.price}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/if}
</div>

<style>
  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
