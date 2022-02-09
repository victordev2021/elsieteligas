<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>
    <div class="bg-slate-900 h-screen p-3">
        <div class="container bg-slate-800 rounded-lg py-10">
            <h1 class="text-center text-6xl text-brand-500 h-3/6">Ya se biene!!!</h1>
        </div>
    </div>
    {{-- <div class="py-12 bg-test">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <x-jet-welcome />
            </div>
        </div>
    </div> --}}
</x-app-layout>
