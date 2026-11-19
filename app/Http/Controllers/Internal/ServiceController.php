<?php

declare(strict_types=1);

namespace App\Http\Controllers\Internal;

use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\Service;
use App\Services\CreateService;
use App\Services\UpdateService;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Throwable;

final class ServiceController
{
    public function index(): View
    {
        Gate::authorize('service.view');

        return view('internal.services.index', [
            'services' => Service::query()->forInstallation()->orderBy('name')->get(),
            'createUrl' => Gate::allows('service.create') ? route('internal.services.create') : null,
            'canEdit' => Gate::allows('service.update'),
            'statusMessage' => session('service_status'),
        ]);
    }

    public function create(): View
    {
        Gate::authorize('service.create');

        return view('internal.services.create', ['action' => route('internal.services.store')]);
    }

    public function store(StoreServiceRequest $request, CreateService $createService): RedirectResponse|Response
    {
        try {
            $createService->execute($request->user(), $request->validated('name'));
        } catch (Throwable) {
            return response()->view('internal.services.uncertain', [], 503);
        }

        return redirect()->route('internal.services.index')->with('service_status', 'Service created.');
    }

    public function show(string $service): View
    {
        Gate::authorize('service.view');

        return view('internal.services.show', [
            'service' => Service::findForInstallation($service),
            'canEdit' => Gate::allows('service.update'),
            'statusMessage' => session('service_status'),
        ]);
    }

    public function edit(string $service): View
    {
        Gate::authorize('service.update');

        return view('internal.services.edit', [
            'service' => Service::findForInstallation($service),
            'action' => route('internal.services.update', $service),
        ]);
    }

    public function update(UpdateServiceRequest $request, string $service, UpdateService $updateService): RedirectResponse|Response
    {
        try {
            $updateService->execute($request->user(), $service, $request->validated('name'));
        } catch (ModelNotFoundException $exception) {
            throw $exception;
        } catch (Throwable) {
            return response()->view('internal.services.uncertain', [], 503);
        }

        return redirect()->route('internal.services.show', $service)->with('service_status', 'Service updated.');
    }
}
